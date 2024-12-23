'use client';

import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModalContext = React.createContext(null);

const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState();

  return (
    <ModalContext.Provider
      value={{
        show: (component) => {
          setContent(component);
          setVisible(true);
        },
        setVisible,
        close: () => {
          setVisible(false);
        },
      }}
    >
      <div className='relative'>
        {children}
        <AnimatePresence>
          {visible && (
            <motion.div
              key={'modal-content'}
              className='fixed top-0 w-full h-screen'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.1,
              }}
            >
              <div
                className='w-full h-full flex items-center justify-center bg-[#00000010]'
                onClick={() => setVisible(false)}
              >
                <div onClick={(e) => e.stopPropagation()}>{content}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error('useModalContext has to be used within <ModalProvider>');

  return {
    ...context,
  };
};

export default ModalProvider;
