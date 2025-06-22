import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "What is malaise?",
    paragraph:
      "In today's fast-paced world, maintaining good mental health is essential for overall well-being.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Emily Carter",
      image: "/images/blog/author-01.png",
      designation: "Parenting Coach",
    },
    tags: ["Mental Health"],
    publishDate: "Oct 15, 2023",
  },
  {
    id: 2,
    title: "Overcoming Anxiety: Strategies for Finding Calm in Chaos",
    paragraph:
      "Anxiety can be overwhelming, making it difficult to cope with everyday life. However, with the right strategies, it's possible to regain control and find peace amidst the chaos.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Amanda Miller",
      image: "/images/blog/author-02.png",
      designation: " Autism Advocate",
    },
    tags: ["Anxiety"],
    publishDate: "Oct 5, 2023",
  },
  {
    id: 3,
    title: "The Power of Gratitude: Transforming Your Mindset for Happiness.",
    paragraph:
      "Gratitude is a powerful practice that can profoundly impact your mental and emotional well-being.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Dr. Rebecca Simmons",
      image: "/images/blog/author-03.png",
      designation: "Educational Psychologist",
    },
    tags: ["Gratitude"],
    publishDate: "Nov 7, 2023",
  },
];
export default blogData;
