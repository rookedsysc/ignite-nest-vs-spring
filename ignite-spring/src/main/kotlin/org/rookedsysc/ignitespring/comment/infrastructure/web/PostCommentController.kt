package org.rookedsysc.ignitespring.comment.infrastructure.web

import org.rookedsysc.ignitespring.comment.domain.usecase.CommentCreateUsecase
import org.rookedsysc.ignitespring.comment.infrastructure.web.decorator.PostCommentControllerDecorator
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentCreateDto
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/posts")
class PostCommentController(
    private val commentCreateUsecase: CommentCreateUsecase
) : PostCommentControllerDecorator {

    @PostMapping("/{id}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    override fun createComment(
        @PathVariable("id") postId: Long,
        @RequestBody commentCreateDto: CommentCreateDto
    ) {
        commentCreateUsecase.createComment(postId, commentCreateDto)
    }
}
