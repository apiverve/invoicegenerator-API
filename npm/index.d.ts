declare module '@apiverve/invoicegenerator' {
  export interface invoicegeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface invoicegeneratorResponse {
    status: string;
    error: string | null;
    data: InvoiceGeneratorData;
    code?: number;
  }


  interface InvoiceGeneratorData {
      pdfName:     string;
      expires:     number;
      downloadURL: string;
  }

  export default class invoicegeneratorWrapper {
    constructor(options: invoicegeneratorOptions);

    execute(callback: (error: any, data: invoicegeneratorResponse | null) => void): Promise<invoicegeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: invoicegeneratorResponse | null) => void): Promise<invoicegeneratorResponse>;
    execute(query?: Record<string, any>): Promise<invoicegeneratorResponse>;
  }
}
