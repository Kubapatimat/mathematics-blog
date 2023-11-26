import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="Proces powstawania strony">
      <p>
        W tym poście przedstawię, w jaki sposób wdrożyłem tą stronę w serwisie{" "}
        <a href="https://www.netlify.com/">Netlify</a>.
      </p>
      <h2>1. Stworzenie repozytorium</h2>
      <p>
        Najpierw musimy stworzyć nowe repozytorium w serwisie GitHub. W tym celu
        należy wejść w <a href="https://github.com/new">ten link</a> i wypełnić
        odpowiednie pola. Repozytorium może być zarówno publiczne, jak i
        prywatne.
      </p>
      <img src="/images/strona-github-repo.png" alt="Tworzenie repozytorium" />
      <p>
        Alternatywną opcją jest stworzenie repozytorium, korzystając z gotowego
        szablonu lub stworzenie forka innego repozytorium. W moim przypadku
        napisałem aplikację od podstaw, wzorując się na innych przykładowych
        stronach napisanych przy wykorzystaniu Next.js.
      </p>
      <h2>2. Stworzenie aplikacji</h2>
      <p>
        Korzystając z narzędzi takich jak Visual Studio Code oraz git,
        stworzyłem stronę internetową oraz napisałem posty w języku Markdown.
      </p>
      <h2>3. Konfiguracja repozytorium pod wdrożenie</h2>
      <p>
        Aby móc wdrożyć aplikację w serwisie Netlify, musimy utworzyć potrzebny
        plik <i>netlify.toml</i> w głównym katalogu projektu. W jego zawartości
        należy wskazać polecenie budujące projekt oraz ścieżkę folderu, do
        którego budowana jest aplikacja.
      </p>
      <pre>
        <b>netlify.toml</b>
        {`
[build]
  command = "npm run build"
  publish = "out"
`}
      </pre>
      <p>
        Dodatkowo należy zdefiniować polecenie <i>build</i> w pliku{" "}
        <i>package.json</i>.
      </p>
      <pre>
        <b>package.json</b>
        {`
"scripts": {
  "build": "next build"
}
`}
      </pre>
      <h2>4. Konfiguracja Netlify</h2>
      <p>
        Najpierw musimy{" "}
        <a href="https://app.netlify.com/signup">stworzyć konto</a> w serwisie
        Netlify, łącząc swoje konto na GitHubie.
      </p>
      <img
        src="/images/strona-netlify-signup.png"
        alt="Tworzenie konta w Netlify"
      />
      <p>
        Po zalogowaniu wybieramy opcję <i>Add new site</i>, a następnie{" "}
        <i>Import an existing project</i>.
      </p>
      <img
        src="/images/strona-netlify-add-new.png"
        alt="Dodanie nowej strony do wdrożenia"
      />
      <p>
        Wybieramy pozycję <i>Deploy with GitHub</i>, a następnie potwierdzamy
        autoryzację
      </p>
      <img
        src="/images/strona-netlify-deploy-github.png"
        alt="Opcja wdrożenia poprzez GitHub"
      />
      <img
        src="/images/strona-netlify-authorize.png"
        alt="Autoryzacja Netlify i GitHub"
      />
      <p>
        W kolejnym kroku musimy skonfigurować integrację Netlify z GitHubem, aby
        nasze repozytorium było widoczne na liście.
      </p>
      <img
        src="/images/strona-netlify-no-repos.png"
        alt="Brak dostępnych repozytoriów"
      />
      <p>Wybieramy nasze repozytorium.</p>
      <img
        src="/images/strona-netlify-github-repo-list.png"
        alt="Wybór repozytorium"
      />
      <p>
        W ostatnim kroku ustawiamy opcje związane z wdrożeniem. Jeżeli nie
        ustawiliśmy ich wcześniej w pliku <i>netlify.toml</i>, możemy ustawić je
        tutaj.
      </p>
      <img
        src="/images/strona-netlify-deploy-settings.png"
        alt="Opcje wdrożenia"
      />
      <p>
        Wystarczy, że klikniemy w przycisk <i>Deploy site</i> i nasza strona
        będzie widoczna dla innych :)
      </p>
    </Layout>
  );
}
