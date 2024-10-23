package org.rookedsysc.ignitespring.post.application.service

import org.rookedsysc.ignitespring.comment.domain.port.`in`.CommentInPort
import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentPostDetailListDto
import org.rookedsysc.ignitespring.comment.mapper.CommentMapper
import org.rookedsysc.ignitespring.post.domain.port.`in`.PostInPort
import org.rookedsysc.ignitespring.post.domain.usecase.PostDetailUsecase
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostDetailDto
import org.rookedsysc.ignitespring.post.mapper.PostMapper
import org.springframework.stereotype.Service

@Service
class PostDetailService(
    private val postInPort: PostInPort,
    private val commentInPort: CommentInPort
) : PostDetailUsecase {
    override fun execute(postId: Long): PostDetailDto {
        val post = postInPort.getPostByIdOrThrow(postId)

        val comments: List<CommentEntity> = commentInPort.findByPostId(postId)
        val commentDtoList: List<CommentPostDetailListDto> = comments.map { comment ->
            CommentMapper.toCommentPostDetailListDto(comment)
        }

        val postDetailDto = PostMapper.toPostDetailDto(post, commentDtoList)
        return postDetailDto
    }
}
