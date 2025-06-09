export default {
  build: {
    outDir: 'docs',
    lib: {
      entry: 'src/index.js',
      name: 'KintoneDashboard',
      fileName: () => 'bundle.js',
      formats: ['iife']
    }
  }
};
