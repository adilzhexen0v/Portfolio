window.addEventListener('DOMContentLoaded', () => {
     const worksItemBlocks = document.querySelectorAll('.works__item-info');
     const worksItemLinkBlocks = document.querySelectorAll('.works__item-link');
     const worksItemLinks = document.querySelectorAll('.works__item-link a');
     const worksItemLinkHeight = window.getComputedStyle(worksItemBlocks[0]).height; 

     const showLinks = (i) => {
          worksItemLinks[2 * i].style.visibility = 'visible';
          worksItemLinks[2 * i].style.opacity = 1;
          worksItemLinks[(2 * i)+1].style.visibility = 'visible';
          worksItemLinks[(2 * i)+1].style.opacity = 1;
     };
     const hideLinks = (i) => {
          worksItemLinks[2 * i].style.visibility = 'hidden';
          worksItemLinks[2 * i].style.opacity = 0;
          worksItemLinks[(2 * i)+1].style.visibility = 'hidden';
          worksItemLinks[(2 * i)+1].style.opacity = 0;
     };

     worksItemBlocks.forEach((block, index) => {
          block.addEventListener('mouseenter', () => {
               worksItemLinkBlocks[index].style.height = worksItemLinkHeight;
               showLinks(index);

          });
          block.addEventListener('mouseleave', () => {
               worksItemLinkBlocks[index].style.height = 0;
               hideLinks(index);
          });
     });
     worksItemLinkBlocks.forEach((block, index) => {
          block.addEventListener('mouseenter', () => {
               block.style.height = worksItemLinkHeight;
               showLinks(index);
          });
          block.addEventListener('mouseleave', () => {
               block.style.height = 0;
               hideLinks(index);
          });
     });

     const worksItemImages = document.querySelectorAll('.works__item-img');
     const worksItemScreenshots = document.querySelectorAll('.works__item-screenshots');
     const worksItemScreenshotsBtns = document.querySelectorAll('.works__item-screenshots-btn');
     const worksItemScreenshotsHeight = window.getComputedStyle(worksItemImages[0]).height;
     const showScreenshots = (j) => {
          worksItemScreenshots[j].style.height = worksItemScreenshotsHeight;
          worksItemScreenshotsBtns[j].style.visibility = 'visible';
          worksItemScreenshotsBtns[j].style.opacity = 1;
     };
     const hideScreenshots = (j) => {
          worksItemScreenshots[j].style.height = 0;
          worksItemScreenshotsBtns[j].style.visibility = 'hidden';
          worksItemScreenshotsBtns[j].style.opacity = 0;
     };
     worksItemImages.forEach((block, index) => {
          block.addEventListener('mouseenter', () => {
               showScreenshots(index);
          });
          block.addEventListener('mouseleave', () => {
               hideScreenshots(index);
          });
     });
     worksItemScreenshots.forEach((block, index) => {
          block.addEventListener('mouseenter', () => {
               showScreenshots(index);
          });
          block.addEventListener('mouseleave', () => {
               hideScreenshots(index);
          });
     });
});