package org.rookedsysc.ignitespring.comment.application.adapter

import org.rookedsysc.ignitespring.comment.domain.port.out.CommentOutPort
import org.rookedsysc.ignitespring.comment.infrastructure.repository.CommentRepository
import org.springframework.stereotype.Repository
import javax.xml.stream.events.Comment

@Repository
class CommentCommandAdapter(
    private val commentRepository: CommentRepository
): CommentOutPort {
    override fun createComment(comment: Comment): Comment {
        return commentRepository.save(comment)
    }
}
