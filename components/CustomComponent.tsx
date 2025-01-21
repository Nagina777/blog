import { PortableTextComponents } from '@portabletext/react';

export const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold text-blue-900">{children}</h2>,
    h3: ({ children }) => <h3 className="text-3xl font-bold text-blue-900">{children}</h3>,
    h4: ({ children }) => <h4 className="text-3xl font-bold text-blue-900">{children}</h4>,
  },

  listItem: {
    bullet: ({ children }) => <li className="list-disc marker:text-blue-900 list-inside ml-4">{children}</li>,
  },

  marks: {
    strong: ({ children }) => <strong className="font-bold text-dark dark:text-white">{children}</strong>,
  },
};
