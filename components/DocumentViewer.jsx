import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function DocumentViewer({ url }) {
  // Acceptă url ca string sau array pentru react-doc-viewer
  const docs = [{ uri: url }];
  return (
    <div style={{ width: "100%", height: 600 }}>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{ height: 600 }} />
    </div>
  );
}
