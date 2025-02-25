export interface Post {
    posts: {
      createdAt: string;
      slug: string;
      id: string;
      title: string;
      overview: string;
      
    }[];
  }


  export interface PostId {
    post: {
      id: string;
      overview: string;
      title: string;
      slug: string;
      publishedAt: string;
      content: any;
    };
  }

  export interface Project {
    projects: {
      id: string;
      slug: string;
      link: string;
      title: string;
      overview: string;
      titleImage: {
        url: string;
      };
      publishedAt: string;
    }[];
  }
  
  export interface ProjectId {
    project: {
      id: string;
      slug: string;
      link: string;
      title: string;
      overview: string;
      publishedAt: string;
      images: {
        url: string;
      }[];
      content: any;
    };
  }
  
