import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img
      src="https://imgs.search.brave.com/Aglon6Hc1Nfk5F6TdMRYHzVmmCUZfcvBCSEx-rQJnPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aG9iYnljb25zb2xh/cy5jb20vc2l0ZXMv/bmF2aS5heGVsc3By/aW5nZXIuZXMvcHVi/bGljL21lZGlhL2lt/YWdlLzIwMjMvMDEv/bWVtZS1wZXJyby1m/aW5lLTI5MjgwNDIu/anBnP3RmPTM4NDB4"
      alt="meme"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nemo
      corrupti nulla magni dolores repudiandae nam neque aspernatur suscipit
      asperiores fugiat assumenda error ad, sequi placeat distinctio. Commodi,
      fuga corrupti!
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }
  `,
})
export class CommentsComponent {}
