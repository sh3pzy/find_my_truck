import React from "react";
import Svg, { Circle, Path, Text as SvgText } from "react-native-svg";

type Variant = "gulf-blue" | "deep-sea" | "sunshine" | "sunset-coral" | "seafoam";
type Mode = "avatar" | "initials" | "initials-ring" | "truck-owner";

interface AccountIconProps {
  size?: number;
  variant?: Variant;
  mode?: Mode;
  initials?: string;
}

const VARIANTS: Record<Variant, { bg: string; fg: string; accent: string }> = {
  "gulf-blue":    { bg: "#006994", fg: "#FFF9F0", accent: "#FFD166" },
  "deep-sea":     { bg: "#003F5C", fg: "#FFF9F0", accent: "#48B4E0" },
  "sunshine":     { bg: "#FFD166", fg: "#003F5C", accent: "#006994" },
  "sunset-coral": { bg: "#FF6B6B", fg: "#FFF9F0", accent: "#FFD166" },
  "seafoam":      { bg: "#A8E6CF", fg: "#003F5C", accent: "#006994" },
};

export default function AccountIcon({
  size = 40,
  variant = "gulf-blue",
  mode = "avatar",
  initials = "?",
  }: AccountIconProps) {
  const { bg, fg, accent } = VARIANTS[variant];

  // Avatar mode — generic person silhouette
  if (mode === "avatar") {
    return (
      <Svg width={size} height={size} viewBox="0 0 80 80">
        {/* Background circle */}
        <Circle cx="40" cy="40" r="40" fill={bg} />
        {/* Head */}
        <Circle cx="40" cy="30" r="13" fill={fg} />
        {/* Body */}
        <Path d="M20 64 Q20 48 40 48 Q60 48 60 64" fill={fg} opacity={0.9} />
        {/* Accent wash at bottom */}
        <Path
          d="M18 64 Q18 47 40 47 Q62 47 62 64 L62 80 L18 80Z"
          fill={accent}
          opacity={0.2}
        />
      </Svg>
    );
  }

  // Initials mode — two-letter monogram
  if (mode === "initials") {
    return (
      <Svg width={size} height={size} viewBox="0 0 80 80">
        <Circle cx="40" cy="40" r="40" fill={bg} />
        <SvgText
          x="40"
          y="49"
          textAnchor="middle"
          fontFamily="Nunito_800ExtraBold"
          fontWeight="800"
          fontSize="26"
          fill={accent}
        >
          {initials.slice(0, 2).toUpperCase()}
        </SvgText>
      </Svg>
    );
  }

  // Initials with subtle ring
  if (mode === "initials-ring") {
    return (
      <Svg width={size} height={size} viewBox="0 0 80 80">
        <Circle cx="40" cy="40" r="40" fill={bg} />
        <Circle cx="40" cy="40" r="36" fill="none" stroke={accent} strokeWidth="2" opacity={0.4} />
        <SvgText
          x="40"
          y="49"
          textAnchor="middle"
          fontFamily="Nunito_800ExtraBold"
          fontWeight="800"
          fontSize="26"
          fill={fg}
        >
          {initials.slice(0, 2).toUpperCase()}
        </SvgText>
      </Svg>
    );
  }

  // Truck owner — initials with coral truck-owner badge pip
  if (mode === "truck-owner") {
    return (
      <Svg width={size} height={size} viewBox="0 0 80 80">
        <Circle cx="40" cy="40" r="40" fill={bg} />
        <SvgText
          x="40"
          y="46"
          textAnchor="middle"
          fontFamily="Nunito_800ExtraBold"
          fontWeight="800"
          fontSize="24"
          fill={fg}
        >
          {initials.slice(0, 2).toUpperCase()}
        </SvgText>
        {/* Coral badge pip */}
        <Circle cx="58" cy="58" r="14" fill="#FF6B6B" />
        <SvgText
          x="58"
          y="64"
          textAnchor="middle"
          fontFamily="Nunito_800ExtraBold"
          fontSize="14"
          fill="#FFF9F0"
        >
          🚚
        </SvgText>
      </Svg>
    );
  }

  return null;
}