```
const onChange = (e) => {
  alert(e)
}

<div>
  <ResumoDiarioField tipo='ALTERNATIVAS' texto='RUIM' onChange={onChange} />
  <br />
  <ResumoDiarioField tipo='LOGICO' texto='false' onChange={onChange} />
  <br />
  <ResumoDiarioField tipo='TEXTO' onChange={onChange} />
  <br />
  <br />
  <ResumoDiarioField tipo='AVALIACAO' onChange={onChange} />
  <br />
</div>
```