package org.rookedsysc.ignitespring.post.infrastructure.web

import jakarta.validation.Valid
import org.rookedsysc.ignitespring.post.domain.usecase.PostCreateUsecase
import org.rookedsysc.ignitespring.post.infrastructure.web.decorator.PostControllerSwagger
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostCreateDto
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/posts")
class PostController(
    private val postCreateUsecase: PostCreateUsecase
) : PostControllerSwagger{
    @PostMapping
    override fun createPost(
        // 여기는 field:Valid가 아니라 바로 Valid
        @Valid
        @RequestBody postCreateDto: PostCreateDto
    ) {
        postCreateUsecase.execute(postCreateDto)
    }
}
