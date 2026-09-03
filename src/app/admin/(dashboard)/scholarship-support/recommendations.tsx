import { AdminActionForm } from "@/components/admin-action-form";

export type ScholarshipRecommendation = {
  id: number;
  request_id: number;
  scholarship_name: string;
  university: string;
  degree_level: string | null;
  country: string | null;
  deadline: string | null;
  link: string | null;
  notes: string | null;
  created_at: string;
};

const dateFormatter = new Intl.DateTimeFormat("en", { dateStyle: "medium" });

export function ScholarshipRecommendations({
  requestId,
  applicantEmail,
  recommendations,
}: {
  requestId: number;
  applicantEmail: string;
  recommendations: ScholarshipRecommendation[];
}) {
  return (
    <details className="admin-item-editor admin-reply-panel">
      <summary>
        Recommendations {recommendations.length > 0 ? `(${recommendations.length})` : ""}
      </summary>

      {recommendations.length > 0 ? (
        <div className="admin-recommendation-list">
          {recommendations.map((recommendation) => (
            <div className="admin-recommendation-item" key={recommendation.id}>
              <div>
                <strong>{recommendation.scholarship_name}</strong>
                <span>{recommendation.university}</span>
                <div className="admin-scholarship-tags">
                  {recommendation.degree_level ? <span className="admin-scholarship-tag">{recommendation.degree_level}</span> : null}
                  {recommendation.country ? <span className="admin-scholarship-tag">{recommendation.country}</span> : null}
                  {recommendation.deadline ? <span className="admin-scholarship-tag">Deadline: {dateFormatter.format(new Date(recommendation.deadline))}</span> : null}
                  {recommendation.link ? (
                    <a href={recommendation.link} target="_blank" rel="noreferrer" className="admin-scholarship-drive-link">Link ↗</a>
                  ) : null}
                </div>
                {recommendation.notes ? <p className="admin-scholarship-field">{recommendation.notes}</p> : null}
              </div>
              <AdminActionForm
                actionName="deleteScholarshipRecommendation"
                successMessage="Recommendation removed."
                confirm={{
                  title: "Remove this recommendation?",
                  text: `${recommendation.scholarship_name} will no longer be visible to the applicant.`,
                  confirmButtonText: "Remove",
                }}
              >
                <input type="hidden" name="recommendationId" value={recommendation.id} />
                <button type="submit" className="admin-recommendation-remove">Remove</button>
              </AdminActionForm>
            </div>
          ))}
        </div>
      ) : null}

      <AdminActionForm
        actionName="addScholarshipRecommendation"
        className="admin-content-form"
        resetOnSuccess
        successMessage={`Recommendation emailed to ${applicantEmail}.`}
      >
        <input type="hidden" name="requestId" value={requestId} />
        <div className="admin-recommendation-form-row admin-form-wide">
          <label>
            <span>Scholarship name</span>
            <input type="text" name="scholarshipName" maxLength={200} required />
          </label>
          <label>
            <span>University</span>
            <input type="text" name="university" maxLength={200} required />
          </label>
        </div>
        <div className="admin-recommendation-form-row admin-form-wide">
          <label>
            <span>Degree level (optional)</span>
            <input type="text" name="degreeLevel" placeholder="e.g. Master's, fully funded" maxLength={60} />
          </label>
          <label>
            <span>Country (optional)</span>
            <input type="text" name="country" maxLength={100} />
          </label>
          <label>
            <span>Deadline (optional)</span>
            <input type="date" name="deadline" />
          </label>
        </div>
        <label className="admin-form-wide">
          <span>Link (optional)</span>
          <input type="url" name="link" placeholder="https://..." maxLength={500} />
        </label>
        <label className="admin-form-wide">
          <span>Notes (optional)</span>
          <textarea name="notes" rows={3} maxLength={2000} placeholder="Why this fits, application tips, etc." />
        </label>
        <button className="admin-submit-button admin-form-wide" type="submit">Add recommendation</button>
      </AdminActionForm>
    </details>
  );
}
