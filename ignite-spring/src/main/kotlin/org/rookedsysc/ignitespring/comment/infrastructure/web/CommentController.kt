package org.rookedsysc.ignitespring.comment.infrastructure.web

import jakarta.validation.constraints.Size
import org.rookedsysc.ignitespring.comment.domain.usecase.CommentListUsecase
import org.rookedsysc.ignitespring.comment.infrastructure.web.decorator.CommentControllerDecorator
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentListDto
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/comments")
class CommentController(
    private val commentListUsecase: CommentListUsecase
) : CommentControllerDecorator {

    @GetMapping
    override fun getComments(
        @RequestParam(value = "currentPage") currentPage: Int,
        @RequestParam(value = "pageSize") pageSize: Int,
    ): List<CommentListDto> {
        val request: Pageable = Pageable.ofSize(pageSize).withPage(currentPage)
        return commentListUsecase.execute(request)
    }
}
