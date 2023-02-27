import { IUser, IPost } from '../utils/types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import apiServer from '../api/apiServer';
import { getTokenStorage, $, $All } from '../utils/helpers';

class PostComment {
  async render(post: IPost, currentUser: IUser, postContainer: HTMLElement) {
    if (!post.comments) {
      return;
    }

    const commentsContainer = <HTMLElement>$('.list-comments', postContainer);
    commentsContainer.innerHTML = '';
    const token = getTokenStorage();

    for await (const comment of post.comments) {
      const commentCreateDate = formatDistanceToNowStrict(new Date(comment.createdDate), { addSuffix: true });
      const user = await apiServer.getUser(comment.user, token);
      const avatar = user.avatar || './img/user/avatar-default.png';
      const deleteBtn = this.addDeleteBtn(user.username, currentUser.username);

      commentsContainer.innerHTML += `
      <li class="list-comments__item item-comments" id="${comment._id}">
        <div class="item-comments__icon">
          <img src="${avatar}" alt="commetn user photo" class="item-comments__img">
        </div>
        <div class="item-comments__info">
          <div class="item-comments__info-main">
            <h3 class="item-comments__name blue">${user.username}</h3>
            <p class="item-comments__text">${comment.text}</p>
          <p class="item-comments__text-time">${commentCreateDate}</p>
          </div>
          ${deleteBtn}
        </div>
      </li>
      `;
      console.log('br');
    }

    this.changeAmountComments(post);
    this.eventListeners();
  }

  eventListeners() {
    const deleteCommentBtn = $All('.item-comment__deleteBtn');
    console.log(deleteCommentBtn);

    deleteCommentBtn.forEach((item) => {
      item.addEventListener('click', (e) => {
        this.deleteComment(e);
      });
    });
  }

  // async getComments(post: IPost) {
  //   if (!post.comments || post.comments.length < 1) {
  //     return { comments: '', length: 0 };
  //   }
  //   const comments = await Promise.all(post.comments.map((comment) => postComment.render(comment, this.currentUser)));

  //   return { block: comments.join(''), length: comments.length };
  // }

  async deleteComment(e: Event) {
    const button = <HTMLElement>e.target;
    const postForDelete = <HTMLElement>button.closest('.item-posts');
    const idPost = <string>postForDelete.getAttribute('id');
    const commentForDelete = <HTMLElement>button.closest('.item-comments');
    const idComment = <string>commentForDelete.getAttribute('id');
    const token = getTokenStorage();
    commentForDelete.remove();
    const response = await apiServer.deleteComment(idComment, idPost, token);
    console.log(response);
  }

  addDeleteBtn(userComment: string, currentUser: string) {
    const deleteBtn =
      userComment === currentUser ? `<i class="fa-sharp fa-solid fa-circle-xmark item-comment__deleteBtn" ></i>` : '';

    return deleteBtn;
  }

  changeAmountComments(post: IPost) {
    const amountBlock = <HTMLElement>$('.comments-posts__amount');
    const amount = <number>post.comments?.length;
    amountBlock.innerHTML = amount === 1 ? `${amount} comments` : `${amount} comment`;
  }
}

export default new PostComment();
