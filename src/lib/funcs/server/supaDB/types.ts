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
