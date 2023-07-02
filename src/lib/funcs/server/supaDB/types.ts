export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          category: string | null
          id: string
          keywords_flat: string | null
          keywords_vect: unknown | null
          overview_vect: string | null
          title: string | null
          year: string | null
        }
        Insert: {
          category?: string | null
          id: string
          keywords_flat?: string | null
          keywords_vect?: unknown | null
          overview_vect?: string | null
          title?: string | null
          year?: string | null
        }
        Update: {
          category?: string | null
          id?: string
          keywords_flat?: string | null
          keywords_vect?: unknown | null
          overview_vect?: string | null
          title?: string | null
          year?: string | null
        }
        Relationships: []
      }
      searches: {
        Row: {
          category: string | null
          created_at: string | null
          id: number
          result_ids: string[] | null
          search_term: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          id?: number
          result_ids?: string[] | null
          search_term?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          id?: number
          result_ids?: string[] | null
          search_term?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_uploaded_images: {
        Args: Record<PropertyKey, never>
        Returns: {
          name: string
        }[]
      }
      get_used_ids: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
        }[]
      }
      search: {
        Args: {
          query: string
          query_embedding: string
          query_category: string
          match_count: number
        }
        Returns: {
          id: string
          title: string
          year: string
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
