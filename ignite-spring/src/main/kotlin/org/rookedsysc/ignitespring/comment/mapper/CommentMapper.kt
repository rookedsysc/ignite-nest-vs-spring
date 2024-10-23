package org.rookedsysc.ignitespring.comment.mapper

import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentCreateDto
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentListDto
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentPostDetailListDto
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostListDto

class CommentMapper {
    companion object {
        fun toEntity(postId: Long, commentCreateDto: CommentCreateDto): CommentEntity {
            return CommentEntity(
                postId = postId,
                content = commentCreateDto.content,
                title = commentCreateDto.title
            )
        }

        fun toCommentListDto(commentEntity: CommentEntity, postListDto: PostListDto): CommentListDto {
            return CommentListDto(
                id = commentEntity.id,
                title = commentEntity.title,
                content = commentEntity.content,
                createdAt = commentEntity.createdAt,
                postListDto = postListDto
            )
        }

        fun toCommentPostDetailListDto(comment: CommentEntity): CommentPostDetailListDto {
            return CommentPostDetailListDto(
                id = comment.id,
                title = comment.title,
                content = comment.content,
                createdAt = comment.createdAt
            )
        }
    }
}
