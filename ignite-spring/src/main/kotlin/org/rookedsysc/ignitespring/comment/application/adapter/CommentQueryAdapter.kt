package org.rookedsysc.ignitespring.comment.application.adapter

import org.rookedsysc.ignitespring.comment.domain.port.`in`.CommentInPort
import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.rookedsysc.ignitespring.comment.infrastructure.repository.CommentRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Repository

@Repository
class CommentQueryAdapter(
    private val commentRepository: CommentRepository
): CommentInPort {
    override fun findAllCommentList(request: Pageable): List<CommentEntity> {
        val comments: Page<CommentEntity> = commentRepository.findAll(request)
        return comments.content
    }

    override fun findByPostId(postId: Long): List<CommentEntity> {
        return commentRepository.findByPostId(postId)
    }
}
