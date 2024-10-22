package org.rookedsysc.ignitespring.comment.domain.usecase

import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentCreateDto

interface CommentCreateUsecase {
    fun createComment(postId:Long, postCreateDto: CommentCreateDto): Unit
}
