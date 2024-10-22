package org.rookedsysc.ignitespring.comment.infrastructure.web.decorator

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import io.swagger.v3.oas.annotations.Parameter
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentCreateDto


@Tag(name = "댓글 관리", description = "게시물에 대한 댓글 관련 API")
interface PostCommentControllerDecorator {
    @Operation(summary = "댓글 작성 API", description = "게시물에 댓글을 작성하는 API")
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "201", description = "댓글 작성 성공"),
            ApiResponse(responseCode = "400", description = "잘못된 요청 데이터"),
            ApiResponse(responseCode = "404", description = "게시물 없음"),
        ]
    )
    fun createComment(
        @Parameter(description = "게시물 ID", example = "1")
        postId: Long,
        @Parameter(description = "댓글 작성에 필요한 데이터")
        commentCreateDto: CommentCreateDto
    ): Unit
}
