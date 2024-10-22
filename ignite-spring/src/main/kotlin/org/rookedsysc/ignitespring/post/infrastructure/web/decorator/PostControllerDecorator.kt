package org.rookedsysc.ignitespring.post.infrastructure.web.decorator

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.Parameter
import io.swagger.v3.oas.annotations.parameters.RequestBody
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import jakarta.validation.Valid
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostCreateDto
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
}
