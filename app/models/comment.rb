class Comment < ApplicationRecord
  belongs_to :user

  after_create_commit :notify_recipient
  before_destroy :cleanup_notifications
  has_noticed_notifications model_name: "Notification"

  private

  def notify_recipient
    #puts self.review_id, "review id aquiiiiiaaaa"
    @review = UsersBook.find(self.review_id)
    puts @review
    CommentNotification.with(comment: :self, review: @review).deliver_later(@review.user)
  end

  def cleanup_notifications
    notifications_as_comment.destroy_all
  end
end
