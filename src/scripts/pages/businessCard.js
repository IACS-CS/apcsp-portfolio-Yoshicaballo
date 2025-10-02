// src/scripts/pages/binarySearch.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

export function renderBusinessCard () {
/* html */
  return `
    <!-- code generated in binarySearch.js -->
    <h1>Binary Search Project</h1>    
    ${renderMenu()}
    <article>
      <p>Assignment: Create two digital business cards using HTML and CSS.</p>
      <hr>
      <p>My second web design project.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/binary-search-team-simpsons/",
        "The Simpsons Game"
      )}
    </article>
    <!-- end code generated in binarySearch.js -->
  `;
}