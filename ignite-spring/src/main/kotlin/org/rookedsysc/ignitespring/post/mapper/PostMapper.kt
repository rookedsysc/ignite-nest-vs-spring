package org.rookedsysc.ignitespring.post.mapper

import org.rookedsysc.ignitespring.post.entity.PostEntity
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostCreateDto

class PostMapper {
    companion object {
        fun toEntity(postCreateDto: PostCreateDto): PostEntity {
            return PostEntity(
                title = postCreateDto.title,
                content = postCreateDto.content,
            )
        }
    }
}
