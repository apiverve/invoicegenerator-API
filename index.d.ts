declare module '@apiverve/invoicegenerator' {
  export interface invoicegeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface invoicegeneratorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class invoicegeneratorWrapper {
    constructor(options: invoicegeneratorOptions);

    execute(callback: (error: any, data: invoicegeneratorResponse | null) => void): Promise<invoicegeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: invoicegeneratorResponse | null) => void): Promise<invoicegeneratorResponse>;
    execute(query?: Record<string, any>): Promise<invoicegeneratorResponse>;
  }
}
