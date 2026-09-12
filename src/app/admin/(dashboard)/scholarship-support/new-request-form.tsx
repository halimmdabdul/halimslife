import { AdminActionForm } from "@/components/admin-action-form";
import {
  SCHOLARSHIP_COUNTRIES,
  SCHOLARSHIP_DEGREES,
} from "@/lib/scholarship-support-options";

export function NewScholarshipRequestForm() {
  return (
    <details className="admin-item-editor admin-reply-panel admin-new-request">
      <summary>+ Add manual request</summary>
      <p className="admin-new-request-hint">
        কোনো user ফোনে/মেসেঞ্জারে/সরাসরি জানিয়েছে? এখানে তার তথ্য দিয়ে একটা request তৈরি করুন — এটা normal request-এর মতোই নিচের লিস্টে দেখা যাবে ও recommendation/reply পাঠানো যাবে।
      </p>
      <AdminActionForm
        actionName="createManualScholarshipRequest"
        className="admin-content-form"
        resetOnSuccess
        successMessage="Request created."
      >
        <div className="admin-recommendation-form-row admin-form-wide">
          <label>
            <span>Name</span>
            <input type="text" name="name" minLength={2} maxLength={80} required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" maxLength={254} required />
          </label>
        </div>
        <div className="admin-recommendation-form-row admin-form-wide">
          <label>
            <span>Target country</span>
            <select name="country" defaultValue="undecided" required>
              {SCHOLARSHIP_COUNTRIES.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Target degree</span>
            <select name="degree" defaultValue="undecided" required>
              {SCHOLARSHIP_DEGREES.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="admin-form-wide">
          <span>Background</span>
          <textarea name="background" rows={2} minLength={5} maxLength={300} placeholder="বর্তমান শিক্ষাগত পটভূমি" required />
        </label>
        <label className="admin-form-wide">
          <span>Goals / needs</span>
          <textarea name="goals" rows={4} minLength={10} maxLength={2000} placeholder="কী ধরনের সাহায্য দরকার" required />
        </label>
        <label className="admin-form-wide">
          <span>CV/Transcript drive link (optional)</span>
          <input type="url" name="driveLink" placeholder="https://drive.google.com/..." maxLength={500} />
        </label>
        <button className="admin-submit-button admin-form-wide" type="submit">Create request</button>
      </AdminActionForm>
    </details>
  );
}
