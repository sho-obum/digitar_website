const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitarmedia.com",
        pathname: "/chinajoy2025/images/**",
      },
      {
        protocol: "https",
        hostname: "digitarmedia.com",
        pathname: "/chinajoy/images/**",
      },
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  async redirects() {
    return [
      {
        source: "/chinajoy2025",
        destination: "https://chinajoy.digitarmedia.com",
        permanent: true,
      },
      {
        source: "/chinajoy2025-clients",
        destination: "https://chinajoy.digitarmedia.com/client",
        permanent: true,
      },
      {
        source: "/teams/anuj-agarwal/",
        destination: "https://chinajoy.digitarmedia.com/anuj-agarwal",
        permanent: true,
      },
      {
        source: "/teams/prerna/",
        destination: "https://chinajoy.digitarmedia.com/prerna",
        permanent: true,
      },
      {
        source: "/teams/dinesh/",
        destination: "https://chinajoy.digitarmedia.com/dinesh",
        permanent: true,
      },
      {
        source: "/teams/simran",
        destination: "https://chinajoy.digitarmedia.com/simran",
        permanent: true,
      },
   
    ];
  },
};

export default nextConfig;
