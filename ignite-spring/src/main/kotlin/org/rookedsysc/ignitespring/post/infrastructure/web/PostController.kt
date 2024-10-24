package org.rookedsysc.ignitespring.post.infrastructure.web

import jakarta.validation.Valid
import org.rookedsysc.ignitespring.post.domain.usecase.PostCreateUsecase
import org.rookedsysc.ignitespring.post.domain.usecase.PostDetailUsecase
import org.rookedsysc.ignitespring.post.infrastructure.web.decorator.PostControllerSwagger
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostCreateDto
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostDetailDto
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/posts")
class PostController(
    private val postCreateUsecase: PostCreateUsecase,
    private val postDetailUsecase: PostDetailUsecase
) : PostControllerSwagger{
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    override fun createPost(
        // 여기는 field:Valid가 아니라 바로 Valid
        @Valid
        @RequestBody postCreateDto: PostCreateDto
    ) {
        postCreateUsecase.execute(postCreateDto)
    }

    @GetMapping("/{postId}")
    override fun getPostDetail(@PathVariable("postId") postId: Long): PostDetailDto {
        return postDetailUsecase.execute(postId);
    }
}
