import { Drawer, List, Toolbar } from "@mui/material";
import ConnectionLabel from "../ConnectionLabel/ConnectionLabel";
import React, { useState } from "react";

interface SidebarProps {
  drawerWidth: number;
  setDrawerWidth: (width: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ drawerWidth, setDrawerWidth }) => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const [selectedDb, setSelectedDb] = useState<string | null>(null);

  const handleSelect = (dbName: string) => {
    setSelectedDb(dbName);
  };

  const handleMouseDown = (e: any) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (dragging) {
      const newWidth = drawerWidth + (e.clientX - startX);
      if (newWidth > 100) {
        setDrawerWidth(newWidth);
        setStartX(e.clientX);
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  React.useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
        <ConnectionLabel
          dbName="SenacDatabase"
          iconSrc="/icons/database/postgresql-logo-svgrepo-com.svg"
          selected={selectedDb === "SenacDatabase"}
          onSelect={handleSelect}
        />
        <ConnectionLabel
          dbName="MyEcommerce"
          iconSrc="/icons/database/postgresql-logo-svgrepo-com.svg"
          selected={selectedDb === "MyEcommerce"}
          onSelect={handleSelect}
        />
        <ConnectionLabel
          dbName="TCS"
          iconSrc="/icons/database/postgresql-logo-svgrepo-com.svg"
          selected={selectedDb === "TCS"}
          onSelect={handleSelect}
        />
      </List>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '5px',
          cursor: 'ew-resize',
        }}
        onMouseDown={handleMouseDown}
      />
    </Drawer>
  );
};

export default Sidebar;
