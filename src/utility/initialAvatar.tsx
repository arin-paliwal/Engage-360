import { useEffect, useState } from "react";

interface InitialAvatarProps {
  name: string;
  size?: "sm" | "md";
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

const satisfyingColors = [
  "#A3D5FF",
  "#FFD4A3",
  "#C2E8C2",
  "#FFB5B5",
  "#D9CFE8",
  "#C8B8A6",
  "#F5CCDA",
  "#E0E0E0",
  "#E3EAB3",
  "#A6F2F2",
  "#FFD4C2",
  "#F9B3B3",
  "#D7A6A6",
  "#AD94A3",
  "#B5C2E0",
  "#B5E0CC",
  "#A6D3E8",
  "#D3A6E8",
  "#FFC9A3",
  "#E8BFA6",
];

export default function InitialAvatar({
  name,
  size = "md",
  borderRadius = "md",
}: InitialAvatarProps) {
  const [initials, setInitials] = useState<string>();
  const [color, setColor] = useState<string>();
  const [textColor, setTextColor] = useState<string>();

  const generateColorIndex = (name: string): number => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % satisfyingColors.length);
  };

  const darkenColor = (hex: string, amount: number): string => {
    const color = hex.replace("#", "");
    const r = Math.max(0, parseInt(color.substring(0, 2), 16) - amount);
    const g = Math.max(0, parseInt(color.substring(2, 4), 16) - amount);
    const b = Math.max(0, parseInt(color.substring(4, 6), 16) - amount);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  useEffect(() => {
    if (!name) return;

    const names = name
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase() + n.slice(1));

    setInitials(names.length > 1 ? names[0][0] + names[1][0] : names[0][0]);

    const colorIndex = generateColorIndex(name);
    const backgroundColor = satisfyingColors[colorIndex];
    setColor(backgroundColor);

    const darkerTextColor = darkenColor(backgroundColor, 60);
    setTextColor(darkerTextColor);
  }, [name]);

  return (
    <div
      className={`flex items-center justify-center 
        ${size === "sm" ? "w-8 h-8" : "w-10 h-10"} rounded-${borderRadius}`}
      style={{ backgroundColor: color }}
    >
      <p
        className={`font-semibold ${size === "sm" ? "text-sm" : "text-base"}`}
        style={{ color: textColor }}
      >
        {initials}
      </p>
    </div>
  );
}
