package org.rookedsysc.ignitespring.post.infrastructure.web.decorator

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.Parameter
import io.swagger.v3.oas.annotations.parameters.RequestBody
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import jakarta.validation.Valid
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostCreateDto
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostDetailDto
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping

@Tag(name = "게시글 관리", description = "게시글 관련 API")
interface PostControllerSwagger {

    @Operation(summary = "게시물 작성 API", description = "게시물을 작성하는 API")
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "201", description = "게시물 작성 성공"),
            ApiResponse(responseCode = "400", description = "잘못된 요청 데이터"),
        ]
    )
    @PostMapping("/api/posts")
    fun createPost(
        @Parameter(description = "게시물 작성에 필요한 데이터")
        @Valid @RequestBody postCreateDto: PostCreateDto
    ): Unit

    @Operation(summary = "게시물 상세 조회 API", description = "게시물 ID로 게시물의 상세 정보와 댓글 목록을 조회하는 API")
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "200", description = "게시물 상세 조회 성공"),
            ApiResponse(responseCode = "404", description = "해당 게시물을 찾을 수 없음")
        ]
    )
    fun getPostDetail(
        @Parameter(description = "조회할 게시물의 ID", example = "1")
        @PathVariable postId: Long
    ): PostDetailDto
}
