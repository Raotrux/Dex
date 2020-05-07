import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFlashcardSet extends Component {

    constructor(props) {
        super(props);

        this.onChangeFlashcardSetTitle = this.onChangeFlashcardSetTitle.bind(this);
        this.onChangeFlashcardSetAuthor = this.onChangeFlashcardSetAuthor.bind(this);
        this.onChangeFlashcardSetDescription = this.onChangeFlashcardSetDescription.bind(this);
        this.onChangeFlashcardSetCategory = this.onChangeFlashcardSetCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            flashcardSet_title: '',
            flashcardSet_author: '',
            flashcardSet_description: '',
            flashcardSet_category: ''
        }
    }

    onChangeFlashcardSetTitle(e) {
        this.setState({
            flashcardSet_title: e.target.value
        });
    }

    onChangeFlashcardSetAuthor(e) {
        this.setState({
            flashcardSet_author: e.target.value
        });
    }

    onChangeFlashcardSetDescription(e) {
        this.setState({
            flashcardSet_description: e.target.value
        });
    }

    onChangeFlashcardSetCategory(e) {
        this.setState({
            flashcardSet_category: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`FlashcardSet Title: ${this.state.flashcardSet_title}`);
        console.log(`FlashcardSet Author: ${this.state.flashcardSet_author}`);
        console.log(`FlashcardSet Description: ${this.state.flashcardSet_description}`);
        console.log(`FlashcardSet Category: ${this.state.flashcardSet_category}`);
        
        const newFlashcardSet = {
            flashcardSet_title: this.state.flashcardSet_title,
            flashcardSet_author: this.state.flashcardSet_author,
            flashcardSet_description: this.state.flashcardSet_description,
            flashcardSet_category: this.state.flashcardSet_category
        };

        axios.post('http://localhost:4000/flashcardSet/add', newFlashcardSet)
            .then(res => console.log(res.data));

        this.setState({
            flashcardSet_title: '',
            flashcardSet_author: '',
            flashcardSet_description: '',
            flashcardSet_category: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New FlashcardSet</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.flashcardSet_title}
                                onChange={this.onChangeFlashcardSetTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Author: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.flashcardSet_author}
                                onChange={this.onChangeFlashcardSetAuthor}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.flashcardSet_description}
                                onChange={this.onChangeFlashcardSetDescription}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryMath" 
                                    value="Math"
                                    checked={this.state.flashcardSet_category==='Math'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">Math</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryScience" 
                                    value="Science" 
                                    checked={this.state.flashcardSet_category==='Science'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">Science</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryEnglish" 
                                    value="English" 
                                    checked={this.state.flashcardSet_category==='English'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">English</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create FlashcardSet" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}