package org.rookedsysc.ignitespring.comment.application.adapter

import org.rookedsysc.ignitespring.comment.domain.port.out.CommentOutPort
import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.rookedsysc.ignitespring.comment.infrastructure.repository.CommentRepository
import org.springframework.stereotype.Repository

@Repository
class CommentCommandAdapter(
    private val commentRepository: CommentRepository
): CommentOutPort {
    override fun createComment(comment: CommentEntity): CommentEntity{
        return commentRepository.save(comment)
    }
}
