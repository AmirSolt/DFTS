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
      movies: {
        Row: {
          embeddings: string | null
          id: number
          title: string | null
        }
        Insert: {
          embeddings?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          embeddings?: string | null
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      searches: {
        Row: {
          category: string | null
          created_at: string | null
          id: number
          result_ids: number[] | null
          search_term: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          id?: number
          result_ids?: number[] | null
          search_term?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          id?: number
          result_ids?: number[] | null
          search_term?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_movies: {
        Args: {
          query_embedding: string
          match_count: number
        }
        Returns: {
          id: number
          title: string
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
