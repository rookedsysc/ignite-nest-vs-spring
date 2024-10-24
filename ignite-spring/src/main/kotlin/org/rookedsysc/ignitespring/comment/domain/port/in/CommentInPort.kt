package org.rookedsysc.ignitespring.comment.domain.port.`in`

import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.springframework.data.domain.Pageable

interface CommentInPort {
    fun findAllCommentList(request: Pageable): List<CommentEntity>

    fun findByPostId(postId: Long): List<CommentEntity>
}
