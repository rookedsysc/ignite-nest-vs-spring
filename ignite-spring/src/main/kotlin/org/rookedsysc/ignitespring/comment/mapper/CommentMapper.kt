package org.rookedsysc.ignitespring.comment.mapper

import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentCreateDto

class CommentMapper {
    companion object {
        fun toEntity(postId: Long, commentCreateDto: CommentCreateDto): CommentEntity {
            return CommentEntity(
                postId = postId,
                content = commentCreateDto.content,
                title = commentCreateDto.title
            )
        }
    }
}
