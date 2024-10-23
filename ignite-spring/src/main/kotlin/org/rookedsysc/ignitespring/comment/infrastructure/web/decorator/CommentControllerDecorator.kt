package org.rookedsysc.ignitespring.comment.infrastructure.web.decorator

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentListDto

@Tag(name = "댓글 관리", description = "게시글에 대한 댓글 관리 API")
interface CommentControllerDecorator {

    @Operation(summary = "댓글 목록 조회 API", description = "게시물에 달린 모든 댓글을 조회하는 API")
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "200", description = "댓글 목록 조회 성공"),
            ApiResponse(responseCode = "404", description = "해당 PostId를 찾을 수 없음")
        ]
    )
    fun getComments(): List<CommentListDto>
}
