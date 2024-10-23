package org.rookedsysc.ignitespring.post.mapper

import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentPostDetailListDto
import org.rookedsysc.ignitespring.post.entity.PostEntity
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostCreateDto
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostDetailDto
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostListDto

class PostMapper {
    companion object {
        fun toEntity(postCreateDto: PostCreateDto): PostEntity {
            return PostEntity(
                title = postCreateDto.title,
                content = postCreateDto.content,
            )
        }

        fun toPostListDto(postEntity: PostEntity): PostListDto {
            return PostListDto(
                id = postEntity.id,
                title = postEntity.title,
                commentCount = postEntity.commentCount,
                createAt = postEntity.createdAt,
            )
        }

        fun toPostDetailDto(postEntity: PostEntity, commentPostDetailListDto: CommentPostDetailListDto) : PostDetailDto{
            return PostDetailDto(
                id = postEntity.id,
                title = postEntity.title,
                content = postEntity.content,
                createdAt = postEntity.createdAt,
                postDetailListDto = commentPostDetailListDto
            )
        }
    }
}
