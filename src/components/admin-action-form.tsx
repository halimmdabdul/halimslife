"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import {
  submitAdminCourseAction,
  type AdminActionName,
} from "@/app/admin/actions";

type Confirmation = {
  title: string;
  text: string;
  confirmButtonText: string;
};

type AdminActionFormProps = {
  actionName: AdminActionName;
  children: ReactNode;
  className?: string;
  confirm?: Confirmation;
  resetOnSuccess?: boolean;
  successMessage: string;
};

function alertTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function AdminActionForm({
  actionName,
  children,
  className,
  confirm,
  resetOnSuccess = false,
  successMessage,
}: AdminActionFormProps) {
  const router = useRouter();
  const submittingRef = useRef(false);
  const [pending, setPending] = useState(false);
  const [formVersion, setFormVersion] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    const form = event.currentTarget;
    const nativeSubmitter = (event.nativeEvent as SubmitEvent).submitter;
    const submitButton = nativeSubmitter instanceof HTMLButtonElement ? nativeSubmitter : null;
    submittingRef.current = true;

    try {
      if (confirm) {
        const confirmation = await Swal.fire({
          theme: alertTheme(),
          icon: "warning",
          title: confirm.title,
          text: confirm.text,
          showCancelButton: true,
          reverseButtons: true,
          focusCancel: true,
          confirmButtonText: confirm.confirmButtonText,
          cancelButtonText: "Cancel",
          confirmButtonColor: "#d9485f",
          cancelButtonColor: "#61747c",
        });
        if (!confirmation.isConfirmed) return;
      }

      submitButton?.setAttribute("disabled", "");
      setPending(true);
      const result = await submitAdminCourseAction(
        actionName,
        new FormData(form),
      );

      if (!result.ok) {
        await Swal.fire({
          theme: alertTheme(),
          icon: "error",
          title: "Action could not be completed",
          text: result.message,
          confirmButtonText: "Try again",
          confirmButtonColor: "#139b72",
        });
        return;
      }

      if (resetOnSuccess) {
        form.closest("details")?.removeAttribute("open");
        setFormVersion((version) => version + 1);
      }
      router.refresh();
      void Swal.fire({
        theme: alertTheme(),
        toast: true,
        position: "top-end",
        icon: "success",
        title: successMessage,
        showConfirmButton: false,
        timer: 2400,
        timerProgressBar: true,
      });
    } catch {
      await Swal.fire({
        theme: alertTheme(),
        icon: "error",
        title: "Connection problem",
        text: "The request could not reach the server. Please check your connection and try again.",
        confirmButtonText: "Close",
        confirmButtonColor: "#139b72",
      });
    } finally {
      submitButton?.removeAttribute("disabled");
      submittingRef.current = false;
      setPending(false);
    }
  }

  return (
    <form
      key={formVersion}
      className={`${className ?? ""} admin-action-form${pending ? " is-pending" : ""}`.trim()}
      aria-busy={pending}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
