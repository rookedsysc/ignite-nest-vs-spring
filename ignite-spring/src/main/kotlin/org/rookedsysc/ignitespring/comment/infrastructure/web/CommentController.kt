package org.rookedsysc.ignitespring.comment.infrastructure.web

import org.rookedsysc.ignitespring.comment.domain.usecase.CommentListUsecase
import org.rookedsysc.ignitespring.comment.infrastructure.web.decorator.CommentControllerDecorator
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentListDto
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/comments")
class CommentController(
    private val commentListUsecase: CommentListUsecase
): CommentControllerDecorator {

    @GetMapping
    override fun getComments(): List<CommentListDto> {
        return commentListUsecase.execute()
    }
}
