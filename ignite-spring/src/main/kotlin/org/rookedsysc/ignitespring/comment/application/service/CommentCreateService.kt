package org.rookedsysc.ignitespring.comment.application.service

import org.rookedsysc.ignitespring.comment.domain.port.out.CommentOutPort
import org.rookedsysc.ignitespring.comment.domain.usecase.CommentCreateUsecase
import org.rookedsysc.ignitespring.comment.entity.CommentEntity
import org.rookedsysc.ignitespring.comment.mapper.CommentMapper
import org.rookedsysc.ignitespring.post.domain.port.`in`.PostInPort
import org.rookedsysc.ignitespring.post.infrastructure.web.dto.PostCreateDto
import org.springframework.stereotype.Service

@Service
class CommentCreateService(
    private val postInPort: PostInPort,
    private val commentOutPort: CommentOutPort
): CommentCreateUsecase {

    override fun createComment(postId:Long, postCreateDto: PostCreateDto) {
        // Post 있는지 검증
        postInPort.getPostByIdOrThrow(postId)
        val comment: CommentEntity = CommentMapper.toEntity(postId, postCreateDto)
        commentOutPort.createComment(comment)
    }
}
