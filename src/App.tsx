import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <h2>Welcome to your App Component 🎉</h2>
            <span>
                Double click to edit  component
                <br />
                &amp; drag here elements from + Add <b>Elements</b> Panel
            </span>
        </div>
    );
}

export default App;
