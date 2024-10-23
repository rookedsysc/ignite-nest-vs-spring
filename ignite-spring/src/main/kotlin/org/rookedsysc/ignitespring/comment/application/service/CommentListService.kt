package org.rookedsysc.ignitespring.comment.application.service

import org.rookedsysc.ignitespring.comment.domain.port.`in`.CommentInPort
import org.rookedsysc.ignitespring.comment.domain.usecase.CommentListUsecase
import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.rookedsysc.ignitespring.comment.infrastructure.web.dto.CommentListDto
import org.rookedsysc.ignitespring.comment.mapper.CommentMapper
import org.rookedsysc.ignitespring.post.domain.port.`in`.PostInPort
import org.rookedsysc.ignitespring.post.entity.PostEntity
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostListDto
import org.rookedsysc.ignitespring.post.mapper.PostMapper
import org.springframework.stereotype.Service

@Service
class CommentListService(
    private val commentInPort: CommentInPort,
    private val postInPort: PostInPort
) : CommentListUsecase {
    override fun execute(): List<CommentListDto> {
        val comments: List<CommentEntity> = commentInPort.findAllCommentList()

        val commentListDto: List<CommentListDto> = comments.map { comment ->
            val post: PostEntity = postInPort.getPostByIdOrThrow(comment.postId)
            val postListDto: PostListDto = PostMapper.toPostListDto(post)
            CommentMapper.toCommentListDto(comment, postListDto)
        }

        return commentListDto
    }
}
