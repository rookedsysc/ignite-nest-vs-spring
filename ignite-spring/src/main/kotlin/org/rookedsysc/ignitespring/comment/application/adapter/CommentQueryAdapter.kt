package org.rookedsysc.ignitespring.comment.application.adapter

import org.rookedsysc.ignitespring.comment.domain.port.`in`.CommentInPort
import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.rookedsysc.ignitespring.comment.infrastructure.repository.CommentRepository
import org.springframework.stereotype.Repository

@Repository
class CommentQueryAdapter(
    private val commentRepository: CommentRepository
): CommentInPort {
    override fun findAllCommentList(): List<CommentEntity> {
        return commentRepository.findAll()
    }
}
