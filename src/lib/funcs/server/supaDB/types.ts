export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      product: {
        Row: {
          category: string | null
          fts: string | null
          fts_content: string | null
          id: number
          image_url: string | null
          name: string | null
        }
        Insert: {
          category?: string | null
          fts?: string | null
          fts_content?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Update: {
          category?: string | null
          fts?: string | null
          fts_content?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_products: {
        Args: {
          query_embedding: number[]
          match_threshold: number
          input_category: string
          match_count: number
        }
        Returns: {
          name: string
          image_url: string
          category: string
          similarity: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
