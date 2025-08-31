export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      checkpoints: {
        Row: {
          created_at: string
          id: number
          summary: string | null
          thread_id: string | null
          title: string | null
          token_count: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          summary?: string | null
          thread_id?: string | null
          title?: string | null
          token_count?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          summary?: string | null
          thread_id?: string | null
          title?: string | null
          token_count?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          attempts: number | null
          checkpoint_count: number | null
          created_at: string | null
          heartbeat_at: string | null
          id: string
          map_pct: number | null
          model: string | null
          plan: string | null
          priority: number | null
          processed_chunks: number | null
          reduce_pct: number | null
          result: string | null
          stage: string | null
          status: string | null
          thread_id: string | null
          title: string | null
          token_estimate: number | null
          total_chunks: number | null
          ui_percent: number | null
          user_id: string | null
        }
        Insert: {
          attempts?: number | null
          checkpoint_count?: number | null
          created_at?: string | null
          heartbeat_at?: string | null
          id?: string
          map_pct?: number | null
          model?: string | null
          plan?: string | null
          priority?: number | null
          processed_chunks?: number | null
          reduce_pct?: number | null
          result?: string | null
          stage?: string | null
          status?: string | null
          thread_id?: string | null
          title?: string | null
          token_estimate?: number | null
          total_chunks?: number | null
          ui_percent?: number | null
          user_id?: string | null
        }
        Update: {
          attempts?: number | null
          checkpoint_count?: number | null
          created_at?: string | null
          heartbeat_at?: string | null
          id?: string
          map_pct?: number | null
          model?: string | null
          plan?: string | null
          priority?: number | null
          processed_chunks?: number | null
          reduce_pct?: number | null
          result?: string | null
          stage?: string | null
          status?: string | null
          thread_id?: string | null
          title?: string | null
          token_estimate?: number | null
          total_chunks?: number | null
          ui_percent?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          checkpoint_limit: number | null
          checkpoint_used: number
          handoff_limit: number | null
          handoff_used: number
          id: string
          plan: string | null
        }
        Insert: {
          checkpoint_limit?: number | null
          checkpoint_used?: number
          handoff_limit?: number | null
          handoff_used?: number
          id: string
          plan?: string | null
        }
        Update: {
          checkpoint_limit?: number | null
          checkpoint_used?: number
          handoff_limit?: number | null
          handoff_used?: number
          id?: string
          plan?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_take_checkpoint: {
        Args: { uid: string }
        Returns: boolean
      }
      can_take_handoff: {
        Args: { uid: string }
        Returns: boolean
      }
      decrement_checkpoint_limit: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      decrement_handoff_limit: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_user_profile: {
        Args: Record<PropertyKey, never>
        Returns: {
          checkpoint_limit: number
          handoff_limit: number
          id: string
          plan: string
        }[]
      }
      mark_checkpoint: {
        Args: { uid: string }
        Returns: undefined
      }
      mark_handoff: {
        Args: { uid: string }
        Returns: undefined
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
