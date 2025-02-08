import { RichText } from '@graphcms/rich-text-react-renderer';
import { LinksFunction, LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql } from 'graphql-request';
import React, { useEffect } from 'react';
import { hygraph } from '~/utils/hygraph.server';
import type { ProjectId } from '~/utils/interface';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import theme from 'prismjs/themes/prism-tomorrow.css?url';
import linenum from 'prismjs/plugins/line-numbers/prism-line-numbers.css?url';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

interface AppProps {
  project: ProjectId;
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: theme },
  { rel: 'stylesheet', href: linenum },
];

export async function loader({ params }: LoaderFunctionArgs) {
  const query = gql`
    query Projects {
      project(where: {slug: "${params.slug}"}) {
        id
        overview
        publishedAt
        title
        slug
        link
        images {
          url
        }
        content {
          raw
        }
      }
    }
  `;

  const project = await hygraph.request(query);

  return json({ project });
}

const ProjectSlug = () => {
  const { project } = useLoaderData() as AppProps;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 lg:px-48">
      <header className="pt-6 xl:pb-6 mt-8">
        <div className="space-y-1">
          <div className="pb-3">
            <h1 className="text-2xl font-bold leading-9 text-zinc-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {project.project.title}
            </h1>
          </div>
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 dark:text-teal-700 text-prple-700 text-center">
                {new Date(project.project.publishedAt).toISOString().split('T')[0]}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Carousel for Images */}
      {project.project.images.length > 0 && (
        <div className="py-6">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="rounded-lg shadow-lg"
          >
            {project.project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.url} alt={`Project image ${index + 1}`} className="rounded-lg w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
        <div className="prose max-w-none pt-10 pb-8 dark:prose-invert prose-lg">
          <RichText
            content={project.project.content.raw}
            renderers={{
              code_block: ({ children }) => {
                return (
                  <pre className="line-numbers language-javascript">
                    <code>{children}</code>
                  </pre>
                );
              },
              img: ({ src, altText, height, width }) => (
                <img
                  src={src}
                  alt={altText}
                  width={width}
                  height={height}
                  className="rounded-lg"
                />
              ),
              a: ({ children, openInNewTab, href, rel, ...rest }) => (
                <a
                  href={href}
                  target={openInNewTab ? '_blank' : '_self'}
                  rel={openInNewTab ? 'noopener noreferrer' : undefined}
                  {...rest}
                  className="text-zinc-200 hover:text-zinc-600"
                >
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlug;

