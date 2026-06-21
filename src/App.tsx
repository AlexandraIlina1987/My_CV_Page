import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { FeedbackPage } from './pages/Feedback/FeedbackPage';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { PostPage } from './pages/PostPage/PostPage';
import { useState } from 'react';
import type { Theme } from './context/ThemeContext';
import { ThemeContext } from './context/ThemeContext';
import { ThemeWrapper } from './components/ThemeWrapper/ThemeWrapper';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeWrapper theme={theme}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<PostPage />} />
        </Routes>
      </ThemeWrapper>
    </ThemeContext.Provider>
  );
}

export default App;
