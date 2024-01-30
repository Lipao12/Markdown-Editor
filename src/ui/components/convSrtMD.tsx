import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import '../style/style.css';


const renderMarkdown = (markdownText) => {
        return (
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                components={{
                    inlineMath: InlineMath,
                    math: BlockMath
                }}
            >
                {markdownText}
            </ReactMarkdown>
        );
    };

export default renderMarkdown;
